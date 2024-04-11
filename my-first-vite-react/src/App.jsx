// 모듈 가져오기
import s from './App.module.css';
import { useEffect, useState } from 'react';
import { data } from './data';
import { v4 as uuidv4 } from 'uuid';

// 컴포넌트 가져오기
import FruitItem from './components/FruitItem';
import ItemHeader from './components/ItemHeader';

export default function App() {
  const [fruits, setFruits] = useState(data.fruits);
  const [newFruitName, setNewFruitName] = useState('');
  const [newFruitPrice, setNewFruitPrice] = useState(0);
  const [newFruitQuantity, setNewFruitQuantity] = useState(0);

  useEffect(() => {
    const urlString = 'http://localhost:3000/fruits';
    fetch(urlString)
      .then((res) => {
        const json = res.json();
        return json;
      })
      .then((fetchedFruits) => {
        setFruits(fetchedFruits);
      })
      .catch((error) => console.error('Error fetching fruits', error));
  }, []);

  // 추가, 수정, 삭제 로직

  const updateFruit = (id, updateFruit) => {
    setFruits(fruits.map((fruit) => (fruit.id === id ? updateFruit : fruit)));
  };

  const registerFruit = (id, updatedFruit) => {
    setFruits(
      fruits.map((fruit) => {
        if (fruit.id === id) {
          return { ...updatedFruit, isNew: false };
        }
        return fruit;
      })
    );
  };

  // 모든 과일의 가격을 합산하여 총액 계산
  const totalPrice = fruits.reduce(
    (acc, fruit) => acc + Number(fruit.price),
    0
  );

  // 서버로 과일 데이터 보내는 함수
  const addFruitToServer = () => {
    // 애플리케이션에 과일 추가하는 함수
    const newFruit = {
      id: uuidv4(),
      name: newFruitName,
      price: newFruitPrice,
      quantity: newFruitQuantity,
      isNew: true,
    };
    fetch('http://localhost:3000/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFruit),
    })
      .then((response) => response.json())
      .then((addedFruit) => {
        setFruits([...fruits, addedFruit]);
      })
      .catch((error) => console.error('Error adding fruit', error));
  };

  // 서버에서 데이터 지우는 함수
  const deleteFruitFromServer = (id) => {
    // 애플리케이션에서 데이터 지우는 함수
    fetch(`http://localhost:3000/fruits/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setFruits(fruits.filter((fruit) => fruit.id !== id));
      })
      .catch((error) => console.error('Error deleting fruit', error));
  };

  return (
    <>
      <main className={s.mainContainer}>
        <form className={s.form}>
          <div className={s.fieldSet}>
            <h2>장바구니 애플리케이션</h2>
            <ItemHeader></ItemHeader>
            {fruits.map((fruit) => (
              <FruitItem
                key={fruit.id}
                fruit={fruit}
                onUpdate={updateFruit}
                onRegister={registerFruit}
                onDelete={() => deleteFruitFromServer(fruit.id)}
                fruits={fruits}
              ></FruitItem>
            ))}
            <div className={s.wrapper}>
              <button type='button' onClick={addFruitToServer}>
                🍏 과일 추가
              </button>
              <span>{'🧺 총액 : ' + totalPrice}</span>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

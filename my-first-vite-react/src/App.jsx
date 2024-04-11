// 모듈 가져오기
import s from './App.module.css';
import { useState } from 'react';
import { data } from './data';
import { v4 as uuidv4 } from 'uuid';

// 컴포넌트 가져오기
import FruitItem from './components/FruitItem';
import ItemHeader from './components/ItemHeader';

export default function App() {
  const [fruits, setFruits] = useState(data.fruits);

  // 추가, 수정, 삭제 로직
  const addFruit = () => {
    const newFruit = {
      id: uuidv4(),
      name: '',
      price: 0,
      quantity: 0,
      isNew: true,
    };
    setFruits([...fruits, newFruit]);
  };

  const updateFruit = (id, updateFruit) => {
    setFruits(fruits.map((fruit) => (fruit.id === id ? updateFruit : fruit)));
  };

  const deleteFruit = (id) => {
    setFruits(fruits.filter((fruit) => fruit.id !== id));
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

  console.dir(totalPrice);
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
                onDelete={deleteFruit}
                fruits={fruits}
              ></FruitItem>
            ))}
            <div className={s.wrapper}>
              <button type='button' onClick={addFruit}>
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

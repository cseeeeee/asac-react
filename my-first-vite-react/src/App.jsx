// 모듈 가져오기
import s from './App.module.css';
import { useState } from 'react';
import { data } from './data';
import FruitItem from './components/FruitItem';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [fruits, setFruits] = useState(data.fruits);

  const addFruit = () => {
    const newFruit = {
      id: uuidv4(),
      name: '',
      price: '',
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

  return (
    <>
      <main className={s.mainContainer}>
        <div className={s.pageContainer}>
          <div className={s.appContainer}>
            <form className={s.form}>
              <div className={s.fieldSet}>
                <h2>장바구니 애플리케이션</h2>
                <div className={s.itemWrapper}>
                  <span className={s.headerItem}>상품</span>
                  <span className={s.headerItem}>가격</span>
                  <span className={s.headerItem}>수량</span>
                  <div className={s.buttonWrapper}>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                {fruits.map((fruit) => (
                  <FruitItem
                    key={fruit.id}
                    fruit={fruit}
                    onUpdate={updateFruit}
                    onRegister={registerFruit}
                    onDelete={deleteFruit}
                  ></FruitItem>
                ))}
                <div className={s.wrapper}>
                  <button type='button' onClick={addFruit}>
                    🍏 과일 추가
                  </button>
                  <span>{'🧺 총액 : ' + 1234}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

// 모듈 가져오기
import s from './App.module.css';
import { useState } from 'react';
import { data } from './data';
import FruitItem from './components/FruitItem';

export default function App() {
  const [fruits, setFruits] = useState(data.fruits);

  const addFruit = () => {
    const newFruit = {
      // id: Date.now(),
      name: '',
      price: '',
      quantity: 0,
    };
    setFruits([...fruits, newFruit]);
  };

  const updateFruit = (id, updateFruit) => {
    setFruits(fruits.map((fruit) => (fruit.id === id ? updateFruit : fruit)));
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
                {fruits.map((fruit, idx) => (
                  <FruitItem
                    key={idx + fruit.name}
                    fruit={fruit}
                    onUpdate={updateFruit}
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

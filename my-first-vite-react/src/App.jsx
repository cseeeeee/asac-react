// 모듈 가져오기
import s from './App.module.css';
import { useState } from 'react';
import { data } from './data';
import FruitItem from './components/FruitsItem';
// import AddFruitItem from './components/AddFruitItem';

//컴포넌트 정의
const { fruits } = data;

export default function App() {
  const [inputs, setInputs] = useState([]);

  const addInputFruit = () => {
    const newFruit = {
      id: Date.now(),
      name: '',
      price: '',
    };
    setInputs([...inputs, newFruit]);
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
                {fruits.concat(inputs).map((item, idx) => (
                  <FruitItem
                    key={item.id || idx}
                    id={item.id}
                    name={item.name}
                    item={item.price}
                    idEditable={!item.id}
                  ></FruitItem>
                ))}
                {/* {fruits.map((f) => (
                  <FruitItem
                    key={f.id}
                    if={f.id}
                    name={f.name}
                    price={f.price}
                  ></FruitItem>
                ))} */}
                <div className={s.wrapper}>
                  <button type='button' onClick={addInputFruit}>
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

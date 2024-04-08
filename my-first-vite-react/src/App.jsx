// 모듈 가져오기
import s from './App.module.css';
import { data } from './data';
//컴포넌트 정의
const { fruits } = data;

export default function App() {
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
                {fruits.map((f, i) => (
                  <div key={i + f.id} className={s.inputWrapper}>
                    <span className={s.inputWrapperItem}>{f.name}</span>
                    <span className={s.inputWrapperItem}>{f.price}</span>
                    <input
                      type='number'
                      className={s.inputWrapperInput}
                      id={`quantityInput_${f.id}`}
                      name={`quantityInput_${f.id}`}
                      min={0}
                      step={1}
                    />
                    <button type='button'>📝</button>
                    <button type='button'>🗑️</button>
                  </div>
                ))}
                <div className={s.wrapper}>
                  <button type='button'>🍏 과일 추가</button>
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

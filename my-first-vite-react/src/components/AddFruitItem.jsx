import React from 'react'; // React를 가져옵니다.
import s from './FruitItems.module.css';

export default function AddFruitItem({ id, name, price }) {
  // 함수 컴포넌트의 매개변수를 구조 분해 할당을 이용하여 정의합니다.
  // 이 컴포넌트에서 상태 관리는 필요 없으므로 useState와 관련된 코드는 제거됩니다.

  return (
    <div key={id} className={s.inputWrapper}>
      <input
        type='text'
        className={s.inputWrapperItem}
        defaultValue={name}
        placeholder='상품 이름'
      />
      <input
        type='text'
        className={s.inputWrapperItem}
        defaultValue={price}
        placeholder='가격'
      />
      <input
        type='number'
        className={s.inputWrapperInput}
        id={`quantityInput_${id}`}
        name={`quantityInput_${id}`}
        min={0}
        step={1}
        placeholder='수량'
      />
      <button type='button'>📝</button>
      <button type='button'>🗑️</button>
    </div>
  );
}

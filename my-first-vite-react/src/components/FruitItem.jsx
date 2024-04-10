import s from './FruitItems.module.css';

import React from 'react';

export default function FruitItem({ fruit, onUpdate }) {
  const { id, name, price, quantity } = fruit;

  const handleChange = (e) => {
    onUpdate(id, { ...fruit, [e.target.name]: e.target.value });
  };

  return (
    <div key={id} className={s.inputWrapper}>
      {id ? (
        <>
          <span className={s.inputWrapperItem}>{name}</span>
          <span className={s.inputWrapperItem}>{price}</span>
        </>
      ) : (
        <>
          <input
            type='text'
            className={s.inputWrapperItem}
            placeholder='상품 이름'
          />
          <input
            type='text'
            className={s.inputWrapperItem}
            placeholder='가격'
          />
        </>
      )}
      <input
        type='number'
        className={s.inputWrapperInput}
        // value={quantity}
        id={`quantityInput_${id}`}
        name={`quantityInput_${id}`}
        min={0}
        step={1}
        placeholder='수량'
        onChange={handleChange}
      />
      <button type='button'>📝</button>
      <button type='button'>🗑️</button>
    </div>
  );
}

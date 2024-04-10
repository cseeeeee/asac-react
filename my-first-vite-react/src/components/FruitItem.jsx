import s from './FruitItems.module.css';

import React from 'react';

export default function FruitItem({ fruit, onUpdate, onRegister, onDelete }) {
  const { id, name, price, isNew } = fruit;

  const handleChange = (e) => {
    onUpdate(id, { ...fruit, [e.target.name]: e.target.value });
    // console.log('create fruits id', id);
  };

  const checkRegister = () => {
    if (!fruit.name.trim() || !fruit.price.trim()) {
      alert('추가할 과일 정보를 입력하세요!');
      return;
    }
    onRegister(id, fruit);
  };

  return (
    <div key={id} className={s.inputWrapper}>
      {isNew ? (
        <>
          <input
            type='text'
            className={s.inputWrapperItem}
            name='name'
            value={name}
            onChange={handleChange}
            placeholder='상품 이름'
          />
          <input
            type='text'
            className={s.inputWrapperItem}
            name='price'
            value={price}
            onChange={handleChange}
            placeholder='가격'
          />
          <input
            type='number'
            className={s.inputWrapperItem}
            name='quantity'
            onChange={handleChange}
            placeholder='수량'
            min={1}
          />
          <button type='button' onClick={checkRegister}>
            ✔️
          </button>
          <button type='button' onClick={() => onDelete(id)}>
            🗑️
          </button>
        </>
      ) : (
        <>
          <span className={s.inputWrapperItem}>{name}</span>
          <span className={s.inputWrapperItem}>{price}</span>
          <input
            type='number'
            className={s.inputWrapperInput}
            id={`quantityInput_${id}`}
            name={`quantityInput_${id}`}
            min={0}
            step={1}
            placeholder='수량'
            onChange={handleChange}
          />
          <button type='button'>📝</button>
          <button type='button' onClick={() => onDelete(id)}>
            🗑️
          </button>
        </>
      )}
    </div>
  );
}

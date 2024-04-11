import s from './FruitItems.module.css';

import React from 'react';

export default function FruitItem({
  fruit,
  onUpdate,
  onRegister,
  onDelete,
  fruits,
}) {
  const { id, name, price, quantity, isNew } = fruit;

  const handleChange = (e) => {
    onUpdate(id, { ...fruit, [e.target.name]: e.target.value });
  };

  const checkRegister = (e) => {
    if (!fruit.name.trim() || fruit.price === '') {
      alert('추가할 과일 정보를 입력하세요!');
      return;
    }
    if (typeof fruit.name !== 'string') {
      alert('⚠️ 과일 이름은 문자여야 합니다.');
      return;
    }

    console.dir(fruit);

    onRegister(id, fruit);
  };

  const handleModify = () => {
    onUpdate(id, { ...fruit, isNew: true });
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
            type='number'
            className={s.inputWrapperItem}
            name='price'
            min={0}
            step={1000}
            value={price}
            onChange={handleChange}
            placeholder='가격'
          />
          <input
            type='number'
            className={s.inputWrapperInput}
            id={`quantityInput_${id}`}
            name='quantity'
            min={0}
            step={1}
            // value={quantity}
            placeholder='수량'
            onChange={handleChange}
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
            name='quantity'
            min={0}
            step={1}
            // value={quantity}
            placeholder='수량'
            onChange={handleChange}
          />
          <button type='button' onClick={handleModify}>
            📝
          </button>
          <button type='button' onClick={() => onDelete(id)}>
            🗑️
          </button>
        </>
      )}
    </div>
  );
}

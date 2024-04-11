import s from './FruitItems.module.css';
import React, { useState } from 'react';

export default function FruitItem({
  fruit,
  onUpdate,
  onRegister,
  onDelete,
  fruits,
}) {
  const { id, name, price, quantity, isNew } = fruit;
  const [localName, setLocalName] = useState(name);
  const [localPrice, setLocalPrice] = useState(price);
  const [localQuantity, setLocalQuantity] = useState(quantity);

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setLocalName(e.target.value);
    } else if (e.target.name === 'price') {
      setLocalPrice(Number(e.target.value));
    } else if (e.target.name === 'quantity') {
      setLocalQuantity(e.target.value);
    }
  };

  const checkRegister = (e) => {
    if (!localName.trim() || localPrice < 0) {
      alert('추가할 과일 정보를 입력하세요!');
      return;
    }
    if (typeof localName !== 'string') {
      alert('⚠️ 과일 이름은 문자여야 합니다.');
      return;
    }

    onRegister(id, {
      name: localName,
      price: localPrice,
      quantity: localQuantity,
      isNew: false,
    });
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
            value={localName}
            onChange={handleChange}
            placeholder='상품 이름'
          />
          <input
            type='number'
            className={s.inputWrapperItem}
            name='price'
            min={0}
            step={1000}
            value={localPrice}
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
            value={localQuantity}
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
            value={localQuantity}
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

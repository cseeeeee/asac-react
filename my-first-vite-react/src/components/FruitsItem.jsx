import s from './FruitItems.module.css';

export default function FruitItem({ id, name, price, isEditable }) {
  return (
    <div key={id} className={s.inputWrapper}>
      {isEditable ? (
        <>
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
        </>
      ) : (
        <>
          <span className={s.inputWrapperItem}>{name}</span>
          <span className={s.inputWrapperItem}>{price}</span>
        </>
      )}
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

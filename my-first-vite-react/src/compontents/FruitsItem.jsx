import s from './FruitItem.module.css';

export default function FruitItem(props) {
  console.log(
    `FruitItem props{
    id: props.id
    name: props.name
    price: props.price
  }`,
    props
  );
  const { id, name, price } = props;
  return (
    <div key={id} className={s.inputWrapper}>
      <span className={s.inputWrapperItem}>{name}</span>
      <span className={s.inputWrapperItem}>{price}</span>
      <input
        type='number'
        className={s.inputWrapperInput}
        id={`quantityInput_${id}`}
        name={`quantityInput_${id}`}
        min={0}
        step={1}
      />
      <button type='button'>📝</button>
      <button type='button'>🗑️</button>
    </div>
  );
}

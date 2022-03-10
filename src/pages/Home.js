import { useRef } from 'react';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';

const HomePage = () => {
  const yourName = useRef();
  const theirName = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    const newName = yourName.current.value;
    const newNameTheirs = theirName.current.value;
    console.log('You clicked submit.');
    console.log(`Your data => ${newName} | Thier data => ${newNameTheirs}`);
  };

  return (
    <form onSubmit={formHandler}>
      <InputField
        floating={true}
        label='Your name'
        placeholder='Your name'
        refName={yourName}
      />
      <InputField
        floating={true}
        label='Their name'
        placeholder='Their name'
        refName={theirName}
      />
      <Button text='Check it Out!' />
    </form>
  );
};

export default HomePage;

import { useRef } from 'react';
import InputField from '../components/ui/InputField';

const HomePage = () => {
  const yourName = useRef();
  const theirName = useRef();

  const inputHandler = () => {
    const newName = yourName.current.value;
    const newNameTheirs = theirName.current.value;
    console.log(`Your name => ${newName}`);
    console.log(`Their name => ${newNameTheirs}`);
  };
  return (
    <form>
      <InputField
        floating={true}
        label='Your name'
        placeholder=''
        refName={yourName}
        inputHandler={inputHandler}
      />
      <InputField
        floating={true}
        label='Their name'
        placeholder=''
        refName={theirName}
        inputHandler={inputHandler}
      />
      {/* <InputField floating={true} label='Your name' placeholder='' refName={yourName} /> */}
    </form>
  );
};

export default HomePage;

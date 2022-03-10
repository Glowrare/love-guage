import { useRef } from 'react';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';

const HomePage = () => {
  const yourName = useRef();
  const theirName = useRef();

  const formHandler = async (e) => {
    e.preventDefault();
    const yourNameVal = yourName.current.value;
    const theirNameVal = theirName.current.value;
    console.log(`Your data => ${yourNameVal} | Their data => ${theirNameVal}`);

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_RAPID_HOST,
        'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,
      },
    };

    const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${yourNameVal}&fname=${theirNameVal}`;

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(`{result: ${data.result}}`);
    console.log(`{perc: ${data.percentage}%}`);
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

import { useRef, useState } from 'react';
import ErrorMessage from '../components/dialog/ErrorMessage';
import Spinner from '../components/effects/Spinner';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';

const HomePage = () => {
  const yourName = useRef();
  const theirName = useRef();

  const [loading, setLoading] = useState(false);
  const [emptyField, setEmptyField] = useState(false);

  const formHandler = async (e) => {
    setEmptyField(false);

    e.preventDefault();

    const yourNameVal = yourName.current.value.trim();
    const theirNameVal = theirName.current.value.trim();

    // Form error handling
    if (yourNameVal === '' || theirNameVal === '') {
      setEmptyField(true);
      return;
    }

    setLoading(true);

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
    setLoading(false);

    if (response.status === 200 && response.ok) {
      console.log(`{result: ${data.result}}`);
      console.log(data);
    } else console.error(response.status);
  };

  return (
    <>
      <form onSubmit={formHandler}>
        {emptyField && <ErrorMessage message='Input fields cannot be empty' />}
        <InputField
          floating={true}
          label='Your name'
          placeholder='Your name'
          refName={yourName}
          required
        />
        <InputField
          floating={true}
          label='Their name'
          placeholder='Their name'
          refName={theirName}
          required
        />
        <Button text='Check it Out!' />
      </form>
      {loading && <Spinner />}
    </>
  );
};

export default HomePage;

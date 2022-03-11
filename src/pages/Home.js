import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../components/dialog/ErrorMessage';
import Guage from '../components/effects/Guage';
import Spinner from '../components/effects/Spinner';
import FlexWrap from '../components/layout/FlexWrap';
import TextBlock from '../components/layout/TextBlock';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';
import LoveCard from '../components/ui/LoveCard';

const HomePage = () => {
  const yourName = useRef();
  const theirName = useRef();

  const [loading, setLoading] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const [guageVal, setGuageVal] = useState(0);

  const formHandler = async (e) => {
    setEmptyField(false);
    setGuageVal(0);

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
      console.log(data);
      setGuageVal(parseInt(data.percentage));
    } else console.error(response.status);
  };

  const firstParagraph =
    'Want to find out the chances of sucessful relationship with your partner/crush just for the heck of it?';
  const secondParagraph =
    'Enter your name and the name of your partner/lover/crush to check out your compatibility score!';

  return (
    <>
      <FlexWrap gap='20px' wrapMd={true} orderSwap={true}>
        <form onSubmit={formHandler}>
          <LoveCard>
            {emptyField && (
              <ErrorMessage message='Input fields cannot be empty' />
            )}
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
          </LoveCard>
        </form>
        <TextBlock
          header='Welcome to Love Guage!'
          paragraph={
            <>
              <p>{firstParagraph}</p>
              <p>{secondParagraph}</p>
            </>
          }
          footnote={
            <>
              Love guage uses{' '}
              <Link to='https://rapidapi.com/ajith/api/love-calculator/'>
                {' '}
                Love Calculator API
              </Link>{' '}
              by <Link to='https://rapidapi.com/user/ajith'>Ajith Joseph</Link>
            </>
          }
        />
      </FlexWrap>
      {loading && <Spinner />}
      {/* <Guage val={guageVal} /> */}
    </>
  );
};

export default HomePage;

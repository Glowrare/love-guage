import { useEffect, useRef, useState } from 'react';
import Dialog from '../components/dialog/Dialog';
import ErrorMessage from '../components/dialog/ErrorMessage';
import Guage from '../components/effects/Guage';
import Overlay from '../components/effects/Overlay';
import Spinner from '../components/effects/Spinner';
import FlexWrap from '../components/layout/FlexWrap';
import TextBlock from '../components/layout/TextBlock';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';
import LoveCard from '../components/ui/LoveCard';

import A11yDialog from 'a11y-dialog';

const HomePage = () => {
  const yourName = useRef();
  const theirName = useRef();
  const dialogContainer = useRef();

  // dialog.show();

  const [loading, setLoading] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const [guageVal, setGuageVal] = useState(0);
  const [message, setMessage] = useState('');
  // const [resultReady, setResultReady] = useState(false);

  const formHandler = async (e) => {
    setEmptyField(false);
    // setResultReady(false)
    setGuageVal(0);
    setMessage('');

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
      setMessage(data.result);

      // setResultReady(true)

      const dialog = new A11yDialog(dialogContainer.current);
      dialog.show();
    } else console.error(response.status);
  };

  const firstParagraph =
    'Want to find out the chances of sucessful relationship with your partner/crush just for the heck of it?';
  const secondParagraph =
    'Enter your name and the name of your partner/lover/crush to check out your compatibility score!';

  // useEffect(() => {
  //   const dialog = new A11yDialog(dialogContainer.current);
  //   dialog.show();
  // }, []);

  return (
    <>
      <FlexWrap gap='50px' wrapMd={true} orderSwap={true}>
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
              <a
                href='https://rapidapi.com/ajith/api/love-calculator/'
                target='_blank'
                rel='noreferrer'
              >
                Love Calculator API
              </a>{' '}
              by{' '}
              <a
                href='https://rapidapi.com/user/ajith'
                target='_blank'
                rel='noreferrer'
              >
                Ajith Joseph
              </a>
            </>
          }
        />
      </FlexWrap>
      {loading && <Overlay />}
      {loading && <Spinner />}
      <Dialog dialogContainer={dialogContainer} message={message}>
        <Guage val={guageVal} />
      </Dialog>
    </>
  );
};

export default HomePage;

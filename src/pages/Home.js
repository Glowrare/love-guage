import { useContext, useRef, useState } from 'react';
import A11yDialog from 'a11y-dialog';

import Dialog from '../components/dialog/Dialog';
import ErrorMessage from '../components/dialog/ErrorMessage';
import Guage from '../components/effects/Guage';
import Overlay from '../components/effects/Overlay';
import Spinner from '../components/effects/Spinner';
import FlexWrap from '../components/ui/FlexWrap';
import TextBlock from '../components/ui/TextBlock';
import Button from '../components/ui/Button';
import InputField from '../components/ui/InputField';
import LoveCard from '../components/ui/LoveCard';
import HistoryContext from '../store/history-context';

const HomePage = () => {
  const yourName = useRef();
  const theirName = useRef();
  const dialogContainer = useRef();

  const [loading, setLoading] = useState(false);
  const [emptyField, setEmptyField] = useState(false);
  const [guageVal, setGuageVal] = useState(0);
  const [message, setMessage] = useState('');
  const [failedCall, setFailedCall] = useState(false);

  const historyCtx = useContext(HistoryContext);

  const formHandler = async (e) => {
    setEmptyField(false);
    setGuageVal(0);
    setMessage('');
    setFailedCall(false);

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
      const dialog = new A11yDialog(dialogContainer.current);
      dialog.show();

      setGuageVal(parseInt(data.percentage));
      setMessage(data.result);

      const newItem = {
        id: `ET${Date.now()}`,
        yourName: yourNameVal,
        theirName: theirNameVal,
        message: data.result,
        guageMeter: data.percentage,
      };

      historyCtx.addItem(newItem);

      //Update to local storage
      const savedHistory = localStorage.getItem('history');
      const historyList = JSON.parse(savedHistory);
      historyList.push(newItem);
      localStorage.setItem('history', JSON.stringify(historyList));

      console.log({ contextData: historyCtx.history });
      console.log({ localData: JSON.parse(localStorage.getItem('history')) });

      yourName.current.value = '';
      theirName.current.value = '';
    } else {
      console.error(response.status);
      setFailedCall(true);
    }
  };

  const firstParagraph =
    'Want to find out the chances of sucessful relationship with your partner/crush just for the heck of it?';
  const secondParagraph =
    'Enter your name and the name of your partner/lover/crush to check out your compatibility score!';

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
            {failedCall && (
              <ErrorMessage message='Oops! Something went wrong. Please try again.' />
            )}
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

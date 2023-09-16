import React from 'react';
import {
  SectionStyled,
  WrapperPagePartStyled,
} from '../../components/commonStyled/SectionStyled.styled';
import { LinkStyled } from '../../components/header/HeaderStyled.styled';

const Home = () => {
  return (
    <SectionStyled>
      <WrapperPagePartStyled>
        <h1>
        Make your life easier with a phone book!
        </h1>
        <h2>
        📱 Don't start any important contact, don't clog up your phone, and leave your phone book organized with our app! 📇
        </h2>
        <h3>
        ✅ Advantages of the phone book:
        </h3>
        <ul>
          <li>
          📞 Easily add and manage contacts: no need to remember phone numbers and names anymore. Just add contacts to your phonebook and go to them in one click.
          </li>
          <li>
          🔍 Quick search : With us you can easily find the contact you need among hundreds of others. Take advantage of powerful search and save time.
          </li>
          <li>
          🌐 Sync with the cloud: Synchronize your phonebook with cloud services to have access to contact with any device and not lose any important number.
          </li>
          <li>
          🛡️ Data protection: Your contacts are safe. The phonebook provides reliable storage and encryption of data.
          </li>
          <li>
          🚀 Ease of use: The simple and straightforward interface makes our app accessible to everyone, even without using any apps.
          </li>
        </ul>
        <h2>
        Open the phone book today and make your life more organized and efficient! 📊
        </h2>
        <LinkStyled to="/login">
        </LinkStyled>
      </WrapperPagePartStyled>
    </SectionStyled>
  );
};

export default Home;

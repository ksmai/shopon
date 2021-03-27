import React, { useState } from 'react';
import {
  Heading,
  Main,
  Layer,
  TextInput,
  Button,
  Box,
  Form,
  FormField,
} from 'grommet';
import { Close } from 'grommet-icons';

import './index-page.module.scss';
import { DefaultLayout, NavItem } from '@shopon/homepage/default-layout';

export interface IndexPageProps {
  navItems: NavItem[];
}

interface FormValue {
  email: string;
  password: string;
  storeName: string;
}

export function IndexPage({ navItems }: IndexPageProps) {
  const [showsPopup, setShowsPop] = useState(false);
  const [value, setValue] = useState<FormValue>({
    email: '',
    password: '',
    storeName: '',
  });

  return (
    <DefaultLayout navItems={navItems}>
      <Main pad="medium">
        <Heading color="brand" margin={{ top: '3rem', bottom: '2rem' }}>
          Sign up now. For free.
        </Heading>
        <TextInput
          placeholder="Enter your email address"
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
        <Button
          onClick={() => setShowsPop(true)}
          label="Sign up"
          primary
          margin={{ top: '1rem' }}
        />
      </Main>

      {showsPopup && (
        <Layer full responsive={false}>
          <Box fill pad="large">
            <Button
              icon={<Close />}
              onClick={() => setShowsPop(false)}
              alignSelf="end"
            />
            <Form
              value={value}
              onChange={(nextValue) => setValue(nextValue as FormValue)}
              onReset={() =>
                setValue({ email: '', password: '', storeName: '' })
              }
              onSubmit={console.log}
            >
              <FormField name="email" htmlFor="signup-email" label="Email">
                <TextInput
                  name="email"
                  id="signup-email"
                  placeholder="Email address"
                />
              </FormField>
              <FormField
                name="password"
                htmlFor="signup-password"
                label="Password"
              >
                <TextInput
                  name="password"
                  id="signup-password"
                  placeholder="Password"
                  type="password"
                />
              </FormField>
              <FormField
                name="storeName"
                htmlFor="signup-store-name"
                label="Store name"
              >
                <TextInput
                  name="storeName"
                  id="signup-store-name"
                  placeholder="Your store name"
                />
              </FormField>

              <Box>
                <Button primary type="submit" label="Sign up" alignSelf="end" />
              </Box>
            </Form>
          </Box>
        </Layer>
      )}
    </DefaultLayout>
  );
}

export default IndexPage;

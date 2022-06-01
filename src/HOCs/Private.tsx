import { Button, Result } from 'antd';
import { FC } from 'react';

const Private: FC = ({ children }) => {
  const isLogged = true;
  if (isLogged) return <>{children}</>;
  else
    return (
      <div>
        <Result
          status="warning"
          title="Please connect to your Wallet"
          extra={
            <Button type="primary" key="wallet">
              You have not logged in!
            </Button>
          }
        />
      </div>
    );
};

export default Private;

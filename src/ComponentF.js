import React from "react";

import { UserContext, ChannelContext } from "./App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(User) => {
          return (
            <ChannelContext.Consumer>
              {(Channel) => {
                return (
                  <div>
                    <h1>
                      user context value {User}, Chenner context value {Channel}
                    </h1>
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;

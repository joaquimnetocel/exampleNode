/* eslint-disable */
import * as Types from "../../../folderCodegenConfigurations/fileGeneratedCompleteCodegenTypes";
import * as gm from "graphql-modules";
export namespace GraphqlmoduleSubscriptionsModule {
  interface DefinedFields {
    typeMessageMessage: 'Author' | 'Text';
    Subscription: 'subscribeMessage';
  };
  
  export type typeMessageMessage = Pick<Types.TypeMessageMessage, DefinedFields['typeMessageMessage']>;
  export type Subscription = Pick<Types.Subscription, DefinedFields['Subscription']>;
  
  export type typeMessageMessageResolvers = Pick<Types.TypeMessageMessageResolvers, DefinedFields['typeMessageMessage'] | '__isTypeOf'>;
  export type SubscriptionResolvers = Pick<Types.SubscriptionResolvers, DefinedFields['Subscription']>;
  
  export interface Resolvers {
    typeMessageMessage?: typeMessageMessageResolvers;
    Subscription?: SubscriptionResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    typeMessageMessage?: {
      '*'?: gm.Middleware[];
      Author?: gm.Middleware[];
      Text?: gm.Middleware[];
    };
    Subscription?: {
      '*'?: gm.Middleware[];
      subscribeMessage?: gm.Middleware[];
    };
  };
}
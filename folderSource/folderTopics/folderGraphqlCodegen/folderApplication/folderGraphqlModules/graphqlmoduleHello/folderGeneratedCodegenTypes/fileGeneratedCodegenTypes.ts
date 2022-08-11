/* eslint-disable */
import * as Types from "../../../folderCodegenConfigurations/fileGeneratedCompleteCodegenTypes";
import * as gm from "graphql-modules";
export namespace GraphqlmoduleHelloModule {
  interface DefinedFields {
    Query: 'queryHelloGuys' | 'queryHello' | 'queryHelloWithSubscription';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      queryHelloGuys?: gm.Middleware[];
      queryHello?: gm.Middleware[];
      queryHelloWithSubscription?: gm.Middleware[];
    };
  };
}
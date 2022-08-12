/* eslint-disable */
import * as Types from "../../../folderCodegenConfigurations/fileGeneratedCompleteCodegenTypes";
import * as gm from "graphql-modules";
export namespace GraphqlmoduleUsersModule {
  interface DefinedFields {
    typeUsers: 'fieldUserId' | 'fieldEmail' | 'fieldName' | 'fieldAge';
    Query: 'readUsers';
  };
  
  export type typeUsers = Pick<Types.TypeUsers, DefinedFields['typeUsers']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  
  export type typeUsersResolvers = Pick<Types.TypeUsersResolvers, DefinedFields['typeUsers'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  
  export interface Resolvers {
    typeUsers?: typeUsersResolvers;
    Query?: QueryResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    typeUsers?: {
      '*'?: gm.Middleware[];
      fieldUserId?: gm.Middleware[];
      fieldEmail?: gm.Middleware[];
      fieldName?: gm.Middleware[];
      fieldAge?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      readUsers?: gm.Middleware[];
    };
  };
}
import { Context } from "apollo-server-core";
import { GraphQLError, GraphQLFieldResolver } from "graphql";


type Args = { id: string };
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

const Query: Record<string, GraphQLFieldResolver<{}, Context, any>> = {
  swapiCharacterById: async (_, args: Args, ctx) => {
    
    try {
      const { id } = args;
      const uri = `https://swapi.dev/api/people/${id}`;
      console.log(uri)
      const response = await fetch(uri);
      console.log(response);
      if(response.status === 404) {
        return {__typename: "StarWarsCharacterNotFound", content: {
          localizedMessage: "error.message",
          message: "Hi There."
        }}
      }
      const json = await response.json();

      // return {__typename: "StarWarsCharacter"}
      return {__typename: "StarWarsCharacter", ...json}
    } catch (error) {
      console.log("Error here")
      throw new GraphQLError("New Error")
    }
  },
};

const StarWarsCharacter = {
  name: (parent: any) => {
    return parent.name;
  },
  height: (parent: any) => {
    return parent.height;
  },
  mass: (parent: any) => {
    return parent.mass;
  },
  gender: (parent: any) => {
    return "MALE";
  },
};

// You can add new Object Resolvers to the default export and the server will pick them up automatically
export default {
  Query,
};

// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface Theme {
    colors: {
      red: string;
      white: string;
      darkGrey: string;
      lightBrown: string;
      brown: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      title: string;
    };
    padding: {};
    gap: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
  }
}

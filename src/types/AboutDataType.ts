type AboutDataType = {
  [key in KeyType]: {
    name: string;
    description: string;
    content: {
      p1: string;
      p2?: string;
      p3?: string;
      p4?: string;
    };
    links?: {
      home?: AccountType;
      instagram?: AccountType;
      youtube?: AccountType;
      linkedin?: AccountType;
      meetup?: AccountType;
    };
  };
};

type KeyType = "accelerate" | "gsk" | "pydata";

type AccountType = {
  name: string;
  url: string;
};

export default AboutDataType;

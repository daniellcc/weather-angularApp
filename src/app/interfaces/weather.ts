export interface Weather {
  weather: [{
    main: string;
    description: string;
  }];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  name: string;
}

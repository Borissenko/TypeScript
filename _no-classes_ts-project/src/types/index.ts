export interface User {
  firstName: string,
  lastName: string,
  twitterHandle: string,
  location: {
    city: string,
    state: string
  }
}

// We can now use this custom data type in any (.vue) or (.ts) file.
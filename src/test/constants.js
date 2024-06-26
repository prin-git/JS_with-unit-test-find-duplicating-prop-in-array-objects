export const mockData = {
  idina_response: {
    sources: [
      {
        url: "example.com",
        spam_score: 1,
        domain_authority: 95
      },
      {
        url: "foo.com",
        spam_score: 2,
        domain_authority: 100
      },
      {
        url: "bar.com",
        spam_score: 1,
        domain_authority: 100
      },
      {
        url: "baz.com",
        spam_score: 1,
        domain_authority: 12
      },
      {
        url: "qux.com",
        spam_score: 2,
        domain_authority: 401
      },
      {
        url: "moz.com",
        spam_score: 186,
        domain_authority: 99
      }
    ]
  }
};

export const mockResult = {
  duplicate_spam_scores: [
    "example.com",
    "bar.com",
    "foo.com",
    "baz.com",
    "qux.com"
  ],
  duplicate_domain_authorities: ["foo.com", "bar.com"]
};

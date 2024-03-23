import { findDuplicates } from "../index";
import { mockData, mockResult } from "./constants";

describe("Listed correct number of items in duplicates array", () => {
  const duplicateResult = findDuplicates(
    mockData.idina_response.sources,
    "spam_score",
    "domain_authority"
  );

  it("duplicate_spam_scores have correct number of  elements", () => {
    expect(duplicateResult.duplicate_spam_scores.length).toBe(
      mockResult.duplicate_spam_scores.length
    );
  });

  it("duplicate_spam_scores have correct number of elements", () => {
    expect(duplicateResult.duplicate_domain_authorities.length).toBe(
      mockResult.duplicate_domain_authorities.length
    );
  });
});

describe("Listed the urls those are origillay duplicated ", () => {
  const duplicateResult = findDuplicates(
    mockData.idina_response.sources,
    "spam_score",
    "domain_authority"
  );

  it("duplicate_spam_scores items listed", () => {
    expect(duplicateResult.duplicate_spam_scores).toEqual(
      expect.arrayContaining([
        "example.com",
        "bar.com",
        "foo.com",
        "baz.com",
        "qux.com"
      ])
    );
  });

  it("duplicate_domain_authorities items listed", () => {
    expect(duplicateResult.duplicate_domain_authorities).toEqual(
      expect.arrayContaining(["foo.com", "bar.com"])
    );
  });
});

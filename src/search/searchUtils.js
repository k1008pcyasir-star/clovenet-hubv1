export function filterSearchResults(query, language, data) {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();

  return data.filter((item) => {
    const title = item.title?.[language]?.toLowerCase() || "";
    const keywords = item.keywords?.[language] || [];

    return (
      title.includes(normalizedQuery) ||
      keywords.some((keyword) =>
        keyword.toLowerCase().includes(normalizedQuery)
      )
    );
  });
}
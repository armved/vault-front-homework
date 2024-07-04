import { useEffect, useState } from "react";
import { Notification } from "@shared/types/notification";
import { LoadingSkeleton, NotificationsList, TextInput } from "@components";
import useDebounce from "@shared/hooks/useDebounce";
import { searchLabels } from "@shared/labels/search";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | Notification[]>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const effect = async () => {
      setError(false);
      setLoading(true);

      //TODO Introduce separate API service and custom hook for calling API
      try {
        const res = await fetch(
          `${import.meta.env["VITE_API_HOST"]}/search?q=${searchText}`,
          { signal },
        );
        const data = await res.json();
        setResults(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error && error?.name !== "AbortError") {
          setError(true);
          setLoading(false);
          setResults([]);
        }
      }
    };
    effect();

    return () => {
      abortController.abort();
    };
  }, [debouncedSearchText]);

  return (
    <div className="flex flex-col gap-8">
      <TextInput
        value={searchText}
        onChange={setSearchText}
        placeholder="Type to filter events"
      />
      {isLoading ? (
        <LoadingSkeleton></LoadingSkeleton>
      ) : error ? (
        <div>{searchLabels.error}</div>
      ) : results?.length ? (
        <NotificationsList notifications={results}></NotificationsList>
      ) : (
        <div>{searchLabels.notFound}</div>
      )}
    </div>
  );
};

export default App;

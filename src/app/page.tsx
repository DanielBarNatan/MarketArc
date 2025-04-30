import SearchBar from '../components/SearchBar';
import AnalyzedEvents from '../components/AnalyzedEvents';
import SimilarHistoricalEvents from '../components/SimilarHistoricalEvents';
import SPIndexChart from '../components/SPIndexChart';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar />
      <AnalyzedEvents />
      <SimilarHistoricalEvents />
      <SPIndexChart />
    </main>
  );
}

import { Hero } from "@/features/home/components";
import { SearchView } from "@/features/common/components/search-view";
import { SearchResults } from "@/features/search/components/search-results";

const SearchScreen = () => {
	return (
		<main className="bg-3deg-cream-200">
			<Hero buttonLinkClassName="bg-3deg-orange-100" />
			<SearchView className="content-spacing my-8" />
			<SearchResults />
		</main>
	);
};

export default SearchScreen;

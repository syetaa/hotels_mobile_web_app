import Search_field from "@/components/search field/Search_field";
import Search_filters from "@/components/search_filters/Search_filters";
import Search_text from "@/components/search_text/Search_text";


export default function Search() {
    return (
        <div>
            <Search_text/>
            <Search_field />
            <Search_filters/>
        </div>
    )
}

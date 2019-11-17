import * as React from "react";
import * as _ from "lodash";
import moment from "moment";
import Dropdown from "ashishdotme-ui/components/dropdown";
import { DropdownItem } from "ashishdotme-ui/components/dropdown/dropdown";
import { Show } from "../../core/models/show";

export interface MainFiltersProps {
  results: Show[];
  filteredResults: Show[];
  selectedGenre: any;
  selectedCompletedYear: any;
  handleGenreChange: (value: DropdownItem) => any;
  handleCompletedYearChange: (value: DropdownItem) => any;
}

const MainFilters = (props: MainFiltersProps) => {
  let results = _.cloneDeep(props.results);
  let genreList: DropdownItem[] = [{ key: "-1", value: "All" }];
  let yearsList: DropdownItem[] = [{ key: "-1", value: "All" }];
  results.forEach((item: any, index: number) => {
    const genres = item.genre.split(",").map(genreObj => genreObj.trim());
    genres.forEach((genre, index) => {
      genreList.push({ key: index, value: genre });
    });
    const viewingDate = moment(item.viewingDate)
      .year()
      .toString();
    yearsList.push({
      key: index,
      value: viewingDate
    });
  });
  genreList = _.uniqBy(genreList, "value")
  yearsList = _.uniqBy(yearsList, "value")
  return (
    <>
      <div className="level has-padding-bottom-10">
        <div className="level-left is-mobile">
          <Dropdown
            classname="m-r-md m-t-md"
            title="Genre"
            list={genreList}
            sortByValue={props.selectedGenre}
            onChange={props.handleGenreChange}
          />
          <Dropdown
            classname="m-t-md"
            title="Completed Year"
            list={yearsList}
            sortByValue={props.selectedCompletedYear}
            onChange={props.handleCompletedYearChange}
          />
        </div>
        <div className="level-right">
          <p className="title is-4">
            <span className="tag is-large is-info has-margin-right-5">
              {props.filteredResults.length}
            </span>
            <span> Shows</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default MainFilters;

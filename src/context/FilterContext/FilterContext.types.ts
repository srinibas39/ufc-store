export type filterProviderType={
    children:React.ReactNode
 }
 
export type filterState = {
   sort: string | null;
   filterCategory: string[];
   stars:string | null;
   range: string | null;
 };
 
export type filterOperationAction={
    type:"SORT"|"STARS"|"CATEGORY"|"RANGE"
    payload:string
 }
 
export type  filterClearAction={
    type:"CLEAR"
 }
 
export type filterAction=filterOperationAction | filterClearAction

export type filterProviderValue={
    state:filterState,
    dispatch:React.Dispatch<filterAction>
 }
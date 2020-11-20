import JobListItem from './JobListItem';

const JobList = ({ jobs, jobfilter }) => {
  const num_jobs = () => {
    let job_types = (Object.values(jobfilter));
    if( job_types.length <= 0) return 0
    let sum = job_types[0].reduce( (total, val) => ( total + val['doc_count']), 0)
    return new Intl.NumberFormat().format(sum)

  }
  const sort_by = [
    {name: 'Location', value:'location'},
    {name: 'Role', value:'Role'},
    {name: 'Department', value:'department'},
    {name: 'Education', value:'education'},
    {name: 'Experience', value:'experience'},
  ]
  return (
    <div className="relativew-full bg-white py-2 px-2">
      <div className="flex px-2 py-8 justify-between">
        <h2>
         { num_jobs() } job postings
        </h2>

        <div className="flex">
          <h2 className="px-2 text-gray-500">Sort by</h2>
          {
            sort_by.map( (item, idx) => (
              <h2 className="px-2 cursor-pointer" key={idx}>
                {item['name']}
              </h2>
            ))
          }

        </div>
      </div>
      {
        jobs.map((item, idx) => (
          <JobListItem jobs={item} key={idx}/>
        )
        )
      }
    </div>
  )
}
export default JobList;
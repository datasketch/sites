import { FC, useEffect, useState } from "react";
import { normalize } from "../utils";

const Explorer: FC<{ data: Record<string, any>[] }> = ({ data }) => {
  const [query, setQuery] = useState('')
  const [records, setRecords] = useState(data)

  useEffect(() => {
    const result = data.filter(record => {
      return normalize(record.title).includes(normalize(query))
    })
    setRecords(result)
  }, [query])

  return (
    <>
      <div className="max-w-screen-sm mx-auto">
        <input className="w-full border px-2 py-1 bg-gray-100 border-transparent" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search" />
      </div>
      <div className="mt-12">
        {records.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {records.map(record => (
              <a href={record.slug} key={record.id} className="bg-white shadow-md px-8 py-4">
                <img src={record.image} className="w-32" alt="" />
                <h3 className="font-bold">{record.title}</h3>
                <p>{record.description}</p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center">There are no results for query <i>&apos;{query}&apos;</i>. <button type="button" className="underline" onClick={() => setQuery('')}>Clear search</button>.</p>
        )}
      </div>
    </>
  )
}

export default Explorer

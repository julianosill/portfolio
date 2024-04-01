import { companies } from '@/utils/data/companies'

import { CareerItem } from './career-item'

export function Companies() {
  return (
    <section className="pt-12">
      {companies.map((company, index) => {
        const isLast = index === companies.length - 1
        return (
          <CareerItem
            key={company.id}
            data={company}
            baseDelay={0.1}
            index={index}
            isLast={isLast}
          />
        )
      })}
    </section>
  )
}

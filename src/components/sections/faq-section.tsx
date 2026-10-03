import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs, reviews } from '@/data/content'

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-36">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-[11px] tracking-[0.22em] text-stone uppercase">Stories</p>
          <h2 className="mt-4 font-display text-4xl leading-tight">머물고 난 뒤의 문장</h2>
          <ul className="mt-10 space-y-8">
            {reviews.map((review) => (
              <li key={review.guest} className="border-t border-line pt-6">
                <p className="text-sm leading-8 text-ink">“{review.quote}”</p>
                <p className="mt-4 text-xs tracking-wide text-stone">
                  {review.guest} · {review.stay}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.22em] text-stone uppercase">FAQ</p>
          <h2 className="mt-4 font-display text-4xl leading-tight">머무르기 전에</h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

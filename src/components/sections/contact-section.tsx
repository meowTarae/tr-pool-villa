import { type FormEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface ContactFormState {
  name: string
  contact: string
  message: string
}

const emptyForm: ContactFormState = {
  name: '',
  contact: '',
  message: '',
}

export function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(emptyForm)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateField = (field: keyof ContactFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrorMessage('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const hasEmptyField = Object.values(form).some((value) => value.trim().length === 0)

    if (hasEmptyField) {
      setErrorMessage('이름, 연락처, 문의 내용을 모두 입력해 주세요.')
      setIsSubmitted(false)
      return
    }

    setIsSubmitted(true)
    setForm(emptyForm)
  }

  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2 md:px-8 md:py-32">
        <div>
          <p className="text-[11px] tracking-[0.22em] text-stone uppercase">Inquiry</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            머무는 일에 대해
            <br />
            궁금한 점
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-stone">
            일정과 공간에 대한 질문을 남겨 주세요. 이 화면은 접수된 모습까지 보여 주며, 실제 메시지는 전송되지 않습니다.
          </p>
        </div>
        <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-2">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              placeholder="이름을 입력해 주세요"
              onChange={(event) => updateField('name', event.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact">연락처</Label>
            <Input
              id="contact"
              name="contact"
              value={form.contact}
              placeholder="전화번호 또는 이메일"
              onChange={(event) => updateField('contact', event.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">문의 내용</Label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              placeholder="궁금한 점을 적어 주세요"
              onChange={(event) => updateField('message', event.target.value)}
            />
          </div>
          {errorMessage ? <p className="text-sm text-moss">{errorMessage}</p> : null}
          {isSubmitted ? (
            <p className="text-sm leading-7 text-forest" role="status">
              문의가 접수되었습니다. 남겨 주신 내용은 이 화면에서만 확인되며, 서버로 전송되지 않습니다.
            </p>
          ) : null}
          <div>
            <Button type="submit">문의 남기기</Button>
          </div>
        </form>
      </div>
    </section>
  )
}

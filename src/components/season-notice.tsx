import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog'

export function SeasonNotice() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <p className="text-[11px] tracking-[0.22em] text-stone uppercase">Notice</p>
        <DialogTitle className="mt-3">여름 성수기 예약이 열렸습니다</DialogTitle>
        <DialogDescription>
          숲이 가장 짙은 계절의 자리를 미리 열어 두었습니다.
          <br />
          일정은 야놀자에서 확인하고 이어서 예약해 주세요.
        </DialogDescription>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button type="button" onClick={() => undefined}>
            야놀자에서 예약
          </Button>
          <Button type="button" variant="ghost" onClick={() => setIsOpen(false)}>
            둘러보기
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

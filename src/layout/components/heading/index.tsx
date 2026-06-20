 
 import style from './index.module.less'
 import { IconChevronDownStroked } from '@douyinfe/semi-icons';
 import type { GenerateMode } from '@/types/constants';
 import { MODE_OPTIONS } from '@/types/constants';
 import cls from 'classnames';
 import { useState, useRef, useEffect } from 'react';
 import useMode from '@/pages/home/hooks/useMode';

 export default function Heading() {
  const {mode, setMode} = useMode();
  const current = MODE_OPTIONS.find(i => i.value === mode);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={style['heading-wrapper']} ref={wrapperRef}>
      <div>开启你的</div>
      <div className={style.center} onMouseDown={(e) => e.preventDefault()}>
        {
        !dropdownVisible ? (
          <span className={style.trigger} onClick={() => setDropdownVisible(true)}>
            {current?.label}
            <IconChevronDownStroked className={style.arrow} />
          </span>
        ):
        (
            <>
            <div className={style.glow} />
            <div className={style.dropdown}>
            {MODE_OPTIONS.map(item => (
              <div
                key={item.value}
                className={cls(style.item, {
                  [style.active]: item.value === mode,
                })}
                onClick={() => {
                  setMode(item.value as GenerateMode);
                  setDropdownVisible(false);
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
          </>
        )
      }
      </div>
      {dropdownVisible && <div className={style['dropdown-fixed']}>Agent模式</div>}
      <div>即刻造梦！</div>
    </div>
  )
}
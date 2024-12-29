import { useState, useRef, ReactNode } from 'react';
import { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { useClickAway } from 'ahooks';

import { cn } from 'helpers';

export const DropdownWrapper = ({
  buttonContent,
  buttonClassName,
  dropdownClassName,
  dropdownPlacement,
  children,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: dropdownPlacement || 'bottom-end',
  });
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useClickAway(() => {
    setIsOpen(false);
  }, wrapperRef);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={wrapperRef}>
      <button
        type="button"
        className={buttonClassName}
        ref={setReferenceElement}
        onClick={toggleDropdown}
      >
        {buttonContent}
      </button>

      {isOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          className={cn('z-10', dropdownClassName)}
          {...attributes.popper}
        >
          {children}
        </div>
      )}
    </div>
  );
};

type Props = {
  children: ReactNode;
  buttonContent: ReactNode;
  buttonClassName?: string;
  dropdownClassName?: string;
  dropdownPlacement?: Placement;
};

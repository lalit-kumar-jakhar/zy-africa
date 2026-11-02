"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  /** Extra classes for the dialog box itself, e.g. width constraints. */
  className?: string;
  /** Accessible name, since these dialogs have no visible heading of their own. */
  ariaLabel?: string;
  /** Set false to render the close button inside the content instead. */
  showCloseButton?: boolean;
  /** Tailwind classes for the close button, so each modal can place it. */
  closeButtonClassName?: string;
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  className = "",
  ariaLabel,
  showCloseButton = true,
  closeButtonClassName = "absolute right-4 top-4 z-50",
}) => {
  const ref = useRef<HTMLDialogElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (open && !el.open) {
      el.showModal();
      contentRef.current?.focus();
    } else if (!open && el.open) {
      el.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const doc = document.documentElement;
    const prevOverflow = doc.style.overflow;
    const prevPadding = doc.style.paddingRight;
    const gap = window.innerWidth - doc.clientWidth;

    doc.style.overflow = "hidden";
    if (gap > 0) doc.style.paddingRight = `${gap}px`;

    return () => {
      doc.style.overflow = prevOverflow;
      doc.style.paddingRight = prevPadding;
    };
  }, [open]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Escape fires `cancel`; blocking the browser's own close keeps React state
    // the single source of truth for `open`.
    const handleCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };

    el.addEventListener("cancel", handleCancel);
    return () => el.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  // A click on the dialog element itself is a backdrop click; content clicks
  // stop at the wrapper child.
  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDialogElement>) => {
      if (event.target === ref.current) onClose();
    },
    [onClose]
  );

  return (
    <dialog
      ref={ref}
      aria-label={ariaLabel}
      onClick={handleBackdropClick}
      className={`m-auto max-h-[92vh] w-[calc(100%-1.5rem)] overflow-visible rounded-3xl bg-transparent p-0 backdrop:bg-black/60 supports-[max-height:92dvh]:max-h-[92dvh] ${className}`}
    >
      <div
        ref={contentRef}
        tabIndex={-1}
        className="relative flex max-h-[92vh] flex-col overflow-hidden rounded-3xl bg-white outline-none supports-[max-height:92dvh]:max-h-[92dvh]"
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className={`rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${closeButtonClassName}`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition-colors hover:bg-red-600">
              <IoClose size={22} className="text-white" />
            </span>
          </button>
        )}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;

import { useEffect } from 'react'

type PrivacyPolicyModalProps = {
  isOpen: boolean
  onClose: () => void
}

const sections = [
  {
    title: '1. Who we are',
    paragraphs: [
      'firstinterview.ai is operated by Remgu LLC, incorporated in Wyoming, USA. This Privacy Policy explains how we collect, use, store, and share personal data when you use the service.',
    ],
  },
  {
    title: '2. What we collect',
    paragraphs: [
      'We may collect:',
      'We may also collect technical and session information necessary to operate the service, maintain security, and support essential site functionality.',
    ],
    bullets: [
      'First and last name.',
      'Email address.',
      'LinkedIn profile URL.',
      'GitHub profile URL.',
      'CV or resume.',
      'Video recording of your interview.',
      'Audio recording of your interview.',
      'Interview transcript generated from your spoken responses.',
      'Scorecard results.',
      'Records of your communications with us, including deletion requests.',
    ],
  },
  {
    title: '3. Why we collect it',
    paragraphs: [
      'We collect personal data:',
      'Using firstinterview.ai does not automatically enroll you in the Remgu talent network. We do not share your profile with hiring companies by default. If we believe you may be a fit for an opportunity, we may contact you separately to ask whether you would like to join the Remgu talent network. If you do not separately opt in, we will not share your profile, CV, scorecard, transcript, or contact information with hiring companies for recruiting purposes.',
    ],
    bullets: [
      'To generate tailored interview questions from your CV and profile.',
      'To record, transcribe, and evaluate your interview responses.',
      'To create and deliver your scorecard and feedback.',
      'To operate, maintain, secure, and improve the service.',
      'To contact you about your use of the service.',
    ],
  },
  {
    title: '4. Legal basis',
    paragraphs: [
      'Where required by applicable law, we rely on your consent to record video and audio of your interview, transcribe your responses, and process your personal data for the purposes described in this policy. Where applicable, we may also process certain information as necessary to provide the service you requested, maintain security, comply with legal obligations, or pursue legitimate business interests that do not override your rights.',
      'You may withdraw your consent at any time for future processing by contacting support@firstinterview.ai. Withdrawal of consent does not affect processing that was already lawfully carried out before your request.',
    ],
  },
  {
    title: '5. How we store and retain data',
    paragraphs: [
      'Data is stored on Google Cloud infrastructure in the europe-west1 region. All stored data is encrypted at rest.',
      'Video and audio recordings are deleted from our systems within 72 hours of your interview.',
      'Transcripts, CVs, scorecard results, name, email address, and profile URLs are retained for up to 24 months to deliver your feedback, operate the service, and improve the service.',
      'We may retain records of deletion requests and communications as needed to demonstrate compliance.',
    ],
  },
  {
    title: '6. Who we share it with',
    paragraphs: [
      'We may share your data with:',
      'We do not sell your personal data to advertisers or third-party data brokers. We do not share your profile with hiring companies unless you separately choose to opt in after being contacted by us.',
    ],
    bullets: [
      'Google Cloud, for hosting and storage.',
      'Google Gemini, for AI processing.',
      'A transactional email provider, to send your scorecard and related service emails.',
    ],
  },
  {
    title: '7. Automated processing',
    paragraphs: [
      'We use AI systems to generate interview questions, create transcripts, and produce scorecards and feedback. These outputs are intended for practice and coaching purposes only. They are not intended to be the sole basis for decisions producing legal or similarly significant effects about you.',
      'If applicable law gives you rights relating to automated decision-making or profiling, you may contact us at support@firstinterview.ai to exercise those rights.',
    ],
  },
  {
    title: '8. Biometric data',
    paragraphs: [
      'We do not collect, create, or store voiceprints, face geometry, or other biometric identifiers from your interview responses. Video and audio recordings are used only for transcription, scorecard generation, and service improvement, and are deleted within 72 hours.',
    ],
  },
  {
    title: '9. Your rights',
    paragraphs: [
      'If you are in the EU or EEA, you may have the right to access your data, correct inaccurate data, delete your data, withdraw consent, port your data to another service, object to certain processing, and lodge a complaint with your local data protection authority.',
      'Depending on where you live, you may have additional privacy rights under local law. We will honor applicable rights as required by law.',
      'To exercise these rights, email support@firstinterview.ai. We will respond within 30 days.',
    ],
  },
  {
    title: '10. Cookies',
    paragraphs: [
      'We use essential cookies only, including cookies needed for session management, security, and core functionality. We do not use tracking cookies or analytics cookies.',
    ],
  },
  {
    title: '11. Data deletion',
    paragraphs: [
      'You may request deletion of your data at any time by emailing support@firstinterview.ai. We will delete your scorecard, transcript, CV, contact information, and any remaining personal data from our systems within 30 days, subject to any limited retention required by law or necessary for security, fraud prevention, or compliance.',
      "If you later separately opt in to the Remgu talent network and your information is shared with a hiring company, data already shared before your deletion request cannot be retroactively deleted from that company's systems by us.",
    ],
  },
  {
    title: '12. Changes',
    paragraphs: [
      'We may update this Privacy Policy from time to time. If changes are material, we may notify you by email or through the service.',
    ],
  },
  {
    title: '13. Contact',
    paragraphs: ['If you have questions about this Privacy Policy or want to exercise your rights, contact'],
  },
] as const

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0f172a]/55 backdrop-blur-[1px]"
        aria-label="Close Privacy Policy"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-[0px_25px_60px_-12px_rgba(2,6,23,0.35)]">
        <div className="flex items-start justify-between gap-4 border-b border-fi-border px-5 py-4 sm:px-7 sm:py-5">
          <div>
            <h2 id="privacy-policy-title" className="font-display text-2xl font-bold text-fi-ink sm:text-[2rem]">
              Privacy Policy
            </h2>
            <p className="mt-1 text-sm text-fi-muted">Last updated: April 1, 2026</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-fi-muted transition-colors hover:bg-[#f3f4f6] hover:text-fi-ink"
            aria-label="Close Privacy Policy"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden>
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="max-h-[78vh] overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <div className="space-y-6 text-[15px] leading-relaxed text-[#374151] sm:text-base">
            {sections.map((section) => (
              <section key={section.title} className="space-y-2.5">
                <h3 className="font-display text-[1.05rem] font-semibold text-fi-ink sm:text-[1.2rem]">
                  {section.title}
                </h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    {section.title === '13. Contact' ? (
                      <>
                        {paragraph}{' '}
                        <a
                          href="mailto:support@firstinterview.ai"
                          className="text-fi-blue underline underline-offset-2 transition-opacity hover:opacity-85"
                        >
                          support@firstinterview.ai
                        </a>
                        .
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
                {'bullets' in section && (
                  <ul className="list-disc space-y-1.5 pl-6 marker:text-fi-blue">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

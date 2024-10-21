

function AuthLayout({ children }: { children: React.ReactNode}) {
  return (
    <section>
        {children}
        <div>
            background image
        </div>
    </section>
  )
}

export default AuthLayout;
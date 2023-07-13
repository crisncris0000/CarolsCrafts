import React from 'react'

export default function ResetPassword() {
  return (
    <>
        <div className="reset-pass-container">
            <form>
                <div class="mb-3">
                    <label for="InputEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="InputEmail" />
                </div>
                <div class="mb-3">
                    <label for="emailToken" class="form-label">Enter code sent to your email</label>
                    <input type="text" class="form-control" id="emailToken" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
  )
}

import React from 'react';
import { Link } from 'react-router-dom'
export const DisplayFormikState = props =>
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>;

export const MoreResources = props =>
  <div>
    <hr style={{ margin: '3rem 0' }} />
    <h3>More Examples</h3>
    <ul>
      <li>
        <Link to="/">Basic</Link>
      </li>
      <li>
        <Link to="/sync">Synchronous validation</Link>
      </li>
      <li>
        <Link to="/custom">Building your own custom inputs</Link>
      </li>
      <li>
        <Link to="/select">3rd-party input components: React-select</Link>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/QW1rqjBLl"
          target="_blank"
          rel="noopener"
        >
          3rd-party input components: Draft.js
        </a>
      </li>
      <li>
        <a
          href="https://codesandbox.io/s/pgD4DLypy"
          target="_blank"
          rel="noopener"
        >
          Accessing Lifecyle Methods (resetting a form externally)
        </a>
      </li>
    </ul>
    <h3 style={{ marginTop: '1rem' }}>Additional Resources</h3>
    <ul>
      <li>
        <a
          href="https://github.com/jaredpalmer/formik"
          target="_blank"
          rel="noopener"
        >
          GitHub Repo
        </a>
      </li>
      <li>
        <a
          href="https://github.com/jaredpalmer/formik/issues"
          target="_blank"
          rel="noopener"
        >
          Issues
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/jaredpalmer"
          target="_blank"
          rel="noopener"
        >
          Twitter (@jaredpalmer)
        </a>
      </li>
    </ul>
  </div>;
